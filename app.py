#import dellla classe Flask da flask
from flask import Flask, jsonify

#inizializziamo flask
#app rappresenta il nostro server
app = Flask(__name__)

#il decoratore route definisce gli ENDPOINT
#"quando siamo alla route "/" richiama il metodo associato"
@app.route("/")
def index():
    #ora una stringa, dopo un json, prossimamente una select da un db
    data = "ciao mondo"
    return data

@app.route('/profilo')
def profilo():
    dati = {
        "nome": 'Jin',
        'cognome': 'Negraccio'
    }
    return jsonify(dati)

if __name__ == "__main__":
    #avviamo il server
    #debug=True permette il riavvio automatico del server
    #quando modifichiamo il codice
    #e mostra errori dettagliati in caso di problema.
    app.run(debug=True)