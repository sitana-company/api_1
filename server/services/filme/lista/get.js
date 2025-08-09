import { _db, _val, _out } from '@netuno/server-types'

const dbFilmes = _db.form('filme')
    .link('categoria')
    .get('categoria.uid', 'categoria_uid')
    .get('categoria.nome', 'categoria_nome')
    .get('filme.uid')
    .get('filme.titulo')
    .get('filme.ano')
    .order('filme.titulo', 'asc')
    .all()

const filmes = _val.list()

for (const dbFilme of dbFilmes) {
    filmes.add(
        _val.map()
            .set(
                'categoria',
                _val.map()
                    .set('uid', dbFilme.getString('categoria_uid'))
                    .set('nome', dbFilme.getString('categoria_nome'))
            )
            .set('uid', dbFilme.getString('uid'))
            .set('titulo', dbFilme.getString('titulo'))
            .set('ano', dbFilme.getInt('ano'))
    )
}

_out.json(filmes)
