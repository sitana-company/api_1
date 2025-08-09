import { _db, _val, _out } from '@netuno/server-types'

const dbCategorias = _db.form('categoria')
    .order('categoria.nome', 'asc')
    .all()

const categorias = _val.list()

for (const dbCategoria of dbCategorias) {
    categorias.add(
        _val.map()
            .set('uid', dbCategoria.getString('uid'))
            .set('nome', dbCategoria.getString('nome'))
    )
}

_out.json(categorias)