from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), default="")
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    peso =  db.Column(db.Integer, default=0)
    genero =  db.Column(db.String(200), default="")
    altura =  db.Column(db.Integer, default=0)
    edad = db.Column(db.Integer, default=0)

   
    """ favorites_user = db.relationship('Favorite', backref = 'user') """ 

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "is_active": self.is_active,
            "peso": self.peso,
            "genero": self.genero,
            "altura": self.altura,
            "edad": self.edad
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()


