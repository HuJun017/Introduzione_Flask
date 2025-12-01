from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # abilita CORS per TUTTE le route

@app.route("/profilo")
def profilo():
    return jsonify({
        "nome": "simone",
        "professione": "giocatore professionista di clash royale",
        "status": "swag"
    })

@app.route("/paesi")
def paesi():
    print('paesi funziona')
    df = pd.read_csv('dati/paesi.csv')
    dati = df.to_dict(orient="records")
    print(dati)
    return jsonify(dati)


if __name__ == "__main__":
    app.run(debug=True, port=5000)