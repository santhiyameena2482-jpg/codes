const colors = ["red", "blue"];
colors.push("green");
colors[0] = "yellow";
colors = ["black"];  //TypeError
//it gives error because try to assign new array to const variable.