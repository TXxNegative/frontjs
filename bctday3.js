function generatebio(){
    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

      // Display them in output section
    document.getElementById("outname").innerText = name;
    document.getElementById("outage").innerText = age;
    document.getElementById("outemail").innerText = email;
    document.getElementById("outcourse").innerText = course;

      // Show the bio section
    document.getElementById("outputSection").style.display = "block";
}