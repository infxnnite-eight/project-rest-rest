const React = require('react')
const Def = require('../default.jsx')

function edit_form () {
    return (
        <Def>
                <form method="POST" action={`/places/${data.place.name}?_method=PUT`}>
                    <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input id="name"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic"  />
                    </div>
                    </div>

                    </form>
                        <main>
                        <h1>Edit Place</h1>
                    </main>
        </Def>
    )
}

module.exports = edit_form
