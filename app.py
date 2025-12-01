from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # abilita CORS per TUTTE le route

@app.route("/profilo")
def profilo():
    # L'indentazione qui è essenziale per definire il corpo della funzione
    return jsonify({
        # L'indentazione qui è per formattare l'oggetto JSON
        "nome": "simone",
        "professione": "giocatore professionista di clash royale",
        "status": "swag"
    })

if __name__ == "__main__":
    # L'indentazione qui è per definire il blocco del condizionale if
    app.run(debug=True, port=5000)