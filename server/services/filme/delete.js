import {_req, _db, _exec, _header, _out, _val} from "@netuno/server-types";

const uid = _req.getString('uid')

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
    .delete()

_out.json(
    _val.map()
        .set('resultado', true)
)
