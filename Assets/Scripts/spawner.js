#pragma strict

var asteroid : Transform;

var enemyMovementSpeed = 0.2;
var spawnTime = 1;
var time = 1;
	
// Update is called once per frame
function Update () {

    time++;

    if (time % (spawnTime * 100) == 0)
    {
        rocketSpawner();
    }
}

function rocketSpawner() {

    var x = Random.Range(-8, 8);
    var y = Random.Range(-4, 4);

    Instantiate(asteroid, new Vector3(x, y, 0), transform.rotation);
}
