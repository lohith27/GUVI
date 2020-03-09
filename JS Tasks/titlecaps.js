my_array = ["guvi", "geek", "netwrks","pvt", "ltd"];

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(titleCase(my_array));