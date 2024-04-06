function roll_dice()
{
    const number = document.getElementById("dice_number").value;
    const values = [];
    const img_val = [];
    let i;
    for(i = 0;i < number;i++)
    {
        let x = Math.floor(Math.random(1,6) * 6) + 1;
        values.push(x);
        img_val.push("<img src=\"images/" + x + ".png\" alt=\"" + x + " no dice\">");
    }
    console.log(values);
    console.log(img_val);
    document.getElementById("dice_show").textContent = "Dice: " + values.join(", ");
    document.getElementById("dice_image").innerHTML = img_val.join(" ");
}