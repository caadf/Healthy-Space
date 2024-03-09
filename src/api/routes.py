"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from werkzeug.security import generate_password_hash, check_password_hash
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required, create_access_token

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    
    if not email: 
        return jsonify({"msg":"Email is required!"}), 400
    if not password: 
        return jsonify({"msg":"Password is required!"}), 400
    
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({ "msg": "User/Password are incorrects!"}), 401
    
    if not check_password_hash(user.password, password):
        return jsonify({ "msg": "User/Password are incorrects!"}), 401
    
    expires = datetime.timedelta(days=1)
    access_token = create_access_token(identity=user.id, expires_delta=expires)
    
    data = {
        "success": "Login succesfully!",
        "access_token": access_token,
        "user": user.serialize()
    }
    
    return jsonify(data), 200


@api.route('/register', methods=['POST'])
def register():
    
    name = request.json.get('name', '')
    email = request.json.get('email')
    password = request.json.get('password')
    is_active = request.json.get('is_active', True)
    
    if not email: 
        return jsonify({"msg":"Email is required!"}), 400
    if not password: 
        return jsonify({"msg":"Password is required!"}), 400
    
    found = User.query.filter_by(email=email).first()
    if found:
        return jsonify({"msg": "Email already exists!"}), 400
    
    user = User()
    user.name = name
    user.email = email
    user.password = generate_password_hash(password)
    user.is_active = is_active
    
    #db.session.add(user)
    #db.session.commit()
    
    user.save()
    
    if not user:
        return jsonify({ "msg": "Error, please try again later"}), 400
    
    return jsonify({"success": "Register successfully, please log in!"}), 200









""" @api.route('/perfil', methods=['GET'])
def get_users():
    usuario_query = User.query.all() # haciendo una consulta a la User para que traiga todos
    usuario_query = list(map(lambda item: item.serialize(), usuario_query))
    response_body = {
        "message": "Usuarios encontrados",
        "Usuario":usuario_query
    }

    return jsonify(response_body), 200 """

@api.route('/perfil', methods=['GET'])
def get_usuario():
    
    user = User.query.all()
    print(user)
    user = list(map(lambda user: user.serialize(), user))
    print(user)
    return jsonify(user), 200

@api.route('/profile', methods=['GET'])
def get_profile(user_id):
    user = User.query.get(user_id)
    
    if user is None:
        return jsonify({"error": "Usuario no encontrado"}), 404

    return jsonify(user.serialize()), 200


@api.route('/perfil', methods=['POST'])
def perfil_actualizar():
    
    name = request.json.get('name', '')
    peso = request.json.get('peso')
    altura = request.json.get('altura')
    edad = request.json.get('edad')
    genero = request.json.get('genero')
    

    
    user = User()
    user.name = name
    user.peso = peso
    user.altura = altura
    user.edad = edad
    user.genero = genero

    #db.session.add(user)
    #db.session.commit()
    
    user.save()
    
    
    return jsonify({"success": "You have update you profile"}), 200
