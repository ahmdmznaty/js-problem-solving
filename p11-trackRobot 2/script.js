let trackRobot = (n=0, e=0, s=0, w=0) => [(e - w), (n - s)]
console.log(trackRobot(20, 30, 10, 40))
console.log(trackRobot())
console.log(trackRobot(-10, 20, 10))