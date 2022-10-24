// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength
    }
    receiveDamage (damage) {
        this.damage = damage;
        this.health = this.health - this.damage
        
    }
}

let qqsoldado = new Soldier(100,50)



// Viking
class Viking extends Soldier { 
    constructor (name, health, strength){
        super( health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health <= 0) {return `${this.name} has died in act of combat`}    
        return `${this.name} has received ${damage} points of damage`
    }   

    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0) {return `A Saxon has received ${damage} points of damage`}    
        if(this.health <= 0) {return `A Saxon has died in combat`}    
    }   
}

// War
class War { }
