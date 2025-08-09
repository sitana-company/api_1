import {_req, _db, _exec, _header, _out, _val} from "@netuno/server-types";

const uid = _req.getString('uid')

const dbFilme = _db.form('filme')
    .where(_db.where('uid').equal(uid))
    .link('categoria')
    .get('categoria.uid', 'categoria_uid')
    .get('categoria.nome', 'categoria_nome')
    .get('filme.uid')
    .get('filme.titulo')
    .get('filme.ano')
    .first()

if (!dbFilme) {
    _header.status(404)
    _out.json(
        _val.map()
            .set('erro', true)
            .set('codigo', 'filme-nao-encontrado')
    )
    _exec.stop()
}

_out.json(
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