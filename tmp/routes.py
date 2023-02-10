from flask import BluePrint, render_template, request, redirect
from .generator import ai 


generator = Blueprint('generatoer', __name__)

generator.route('/')
def index():
    return render_template('index.html')

@generator.route('/analyze', methods=['POST'])
def analyze():
    