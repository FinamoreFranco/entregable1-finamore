
const namePlayer = prompt("Enter your name, hunter:");
let levelPlayer = 1;
const job = ["necromancer", "assassin", "healer", "druid", "monk"];
const weapons = ["ax","dagger","spear", "mace","shield"];
const enemies = [
    { name: "Goblin", level: 1, health: 100, damage: 10 },
    { name: "Orc", level: 5, health: 150, damage: 15 },
    { name: "Beast", level: 8, health: 200, damage: 20 },
    { name: "Dragon", level: 12, health: 300, damage: 30 },
    { name: "Demon", level: 18, health: 400, damage: 40 }
];
let playerJob = "";

let showJob = job.join('\n');

function chooseJob() {
    let chooseJob = "";


    while (!job.includes(chooseJob)) {
        chooseJob = prompt("Choose your job:\n" + showJob);
        if (job.includes(chooseJob)) {
            playerJob = chooseJob;
            alert("Hunter " + namePlayer + ", you are a " + chooseJob + "!");
        } else {
            alert("This job does not exist. Choose one of these:\n" + showJob);
        }
    }

    console.log("Hunter: " + namePlayer + ", Job: " + playerJob + ", Level: " + levelPlayer);
    return playerJob;
}


chooseJob();

function chooseWeapon(){
    let chooseWeapon = "";
    let playerWeapon = "";

    while (!weapons.includes(chooseWeapon)) {
        chooseWeapon = prompt("Choose your weapon:\n" + weapons.join('\n'));
        if (weapons.includes(chooseWeapon)) {
            playerWeapon = chooseWeapon;
            alert("Hunter " + namePlayer + ", you are a " + playerJob + " with a " + playerWeapon + "!");
        } else {
            alert("This weapon does not exist. Choose one of these:\n" + weapons.join('\n'));
        }
    }

    console.log("Hunter: " + namePlayer + ", Job: " + playerJob + ", Level: " + levelPlayer + ", Weapon: " + playerWeapon);
    return playerWeapon;
}

chooseWeapon();

function randomEnemy() {
    let randomIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[randomIndex];
    return enemy;
}

let enemySelected = randomEnemy();

function printEnemy(enemy) {
    console.log("Enemy: " + enemy.name + ", Level: " + enemy.level + ", Health: " + enemy.health + ", Damage: " + enemy.damage);
    alert("Enemy: " + enemy.name + "\nLevel: " + enemy.level + "\nHealth: " + enemy.health + "\nDamage: " + enemy.damage);
}

printEnemy(enemySelected);

function fight() {
    if (levelPlayer >= enemySelected.level) {
        alert("You are strong enough to fight this enemy!");
    } else {
        alert("You are not strong enough to fight this enemy!");
    }
}

fight();
