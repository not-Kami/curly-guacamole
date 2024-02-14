let start = document.getElementById('btn');
console.log(start)

function createMonth(){
    let maxDays = 31;
    let maxRow = 5;
    let maxCol = 7;
    let currentDay = 1;
    let currentWeek = 1;
    document.write("<table>")
        document.write("<tr>")
        while (currentDay <= maxDays) {
            console.log(currentDay, 'currentDay')
            document.write("<td>"+ currentDay+"</td>");
            if(currentDay % 7 == 0){
                document.write("</tr>")
                document.write("<tr>")
            }
            ++currentDay     
        }    
        document.write("</tr>")
    document.write("</table>")
}

start.addEventListener('click', createMonth)