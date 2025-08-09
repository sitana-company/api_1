import {_req, _out, _val, _db, _header, _exec} from '@netuno/server-types'

const categoriaUid = _req.getValues('categoria').getString('uid')
const uid = _req.getString('uid')
const titulo = _req.getString('titulo')
const ano = _req.getInt('ano')

const dbCategoria = _db.form('categoria')
    .where(_db.where('uid').equal(categoriaUid))
    .first()

const dbFilme = _db.form('filme')
    .where(_db.where('uid').equal(uid))
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

_db.form('filme')
    .where(_db.where('id').equal(dbFilme.getInt('id')))
    .set('categoria_id', dbCategoria.getInt('id'))
    .set('titulo', titulo)
    .set('ano', ano)
    .update()

_out.json(
    _val.map()
        .set('resultado', true)
)
