from flask import Flask, render_template
from datetime import datetime
app = Flask(__name__)

datum = datetime.today().strftime('%Y-%m-%d')

@app.route('/')
def home():
    return render_template('home.html', pagina_naam="Dashboard", datum=datum)

@app.route('/settings')
def settings():
    return render_template('settings.html', pagina_naam="Settings", datum=datum)

if __name__ == '__main__':
    app.run(debug=True)
