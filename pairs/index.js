/**
 * get the list pairs from couples
 * @customfunction
 */
function pairsFromCouples(students, couples) {
  var students = students.map((elm) => elm[0]);
  var obj = {};
  for (var i = 0; i < couples.length; i++) {
    var couple = couples[i];
    obj[couple[0]] = couple[1];
    obj[couple[1]] = couple[0];
  }
  var arr = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    arr.push(obj[student]);
  }
  return arr.map((elm) => [elm]);
}
function getPairs(students, pairs) {
  let exist = {}
  let couples = []
  for (let i = 0; i < students.length; i++) {
    let student = students[i]
    let pair = pairs[i]
    if (exist[student] === undefined) {
      couples.push([student, pair])
      exist[pair] = true
    }
  }
  return couples
}
/**
 * get the repeated elements
 * @customfunction
 */
function test(input) {
  return input
}
function getPairs(students, pairs) {
  let exist = {}
  let couples = []
  for (let i = 0; i < students.length; i++) {
    let student = students[i]
    let pair = pairs[i]
    if (exist[student] === undefined) {
      couples.push([student, pair])
      exist[pair] = true
    }
  }
  return couples
}
function shuffleF(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function displayCouples(couples) {
  let str = ""
  for (let i = 0; i < couples.length; i++) {
    let couple = couples[i]
    if (couple[0] === "SOLO") {
      str += couple[1] + " :muscle:\n"
    } else if (couple[1] === "SOLO") {
      str += couple[0] + " :muscle:\n"
    } else if (!couple.includes("Absent")) {
      str += couple[0] + " :handshake: " + couple[1] + "\n"
    }
  }
  return str
}
/**
 * get random pairs place
 * @customfunction
 */
function getCouples(students, pairs, shuffle, arrayForm) {
  let students1D = students.map(cv => cv[0])
  let pairs1D = pairs.map(cv => cv[0])
  let couples = getPairs(students1D, pairs1D)
  if (shuffle === true) {
    couples = shuffleF(couples)
  }
  if (arrayForm === true) {
    return JSON.stringify(couples)
  }
  return displayCouples(couples)
}
/**
 * get the repeated elements
 * @customfunction
 */
function repeat(input) {
  let arr = input[0]
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let elm = arr[i]
    if (obj[elm] === undefined) {
      obj[elm] = 1
    } else {
      obj[elm] = obj[elm] + 1
    }
  }
  let rtn = ""
  for (let key in obj) {
    let elm = obj[key]
    if (elm > 1) {
      rtn += key + ":" + elm + ","
    }
  }
  if (rtn === "") {
    return false
  }
  return rtn
}


function repeatTool(input) {
  let arr = input[0]
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let elm = arr[i]
    if (obj[elm] === undefined) {
      obj[elm] = 1
    } else {
      obj[elm] = obj[elm] + 1
    }
  }
  let rtn = {}
  for (let key in obj) {
    let elm = obj[key]
    if (elm > 1) {
      rtn[key] = elm
    }
  }
  return rtn
}
/**
 * get the repeated elements
 * @customfunction
 */
function repeatDifference(input1, input2) {
  let rpt1 = repeatTool(input1)
  let rpt2 = repeatTool(input2)
  let rpt = { ...rpt2 }
  for (key in rpt) {
    if (rpt1[key]) {
      rpt[key] = rpt[key] - rpt1[key]
      if (rpt[key] === 0) {
        delete rpt[key]
      }
    }
  }
  return JSON.stringify(rpt)
}

/**
 * get new pair
 */
function getNewPair(setStudents, student, setOldPairs) {
  let difference = [...setStudents].filter(
    (x) => !setOldPairs.has(x) && x !== student
  );
  const randomElement =
    difference[Math.floor(Math.random() * difference.length)];
  return randomElement;
}

/**
 * get new pairs
 * @param listStudents list of students in the Cohort
 * @param listOldPairs pairs of students before
 * @param decidedPairs pairs of students you already choose or their state (Absent/SOLO) 
 * @customfunction
 */
function newPairs(listStudents, listOldPairs, decidedPairs) {
  listStudents = listStudents.map(cv => cv[0])
  decidedPairs = decidedPairs.map(cv => cv[0])
  let decidedNumber = decidedPairs.filter(cv => cv !== undefined).length
  let even = (listStudents.length - decidedNumber) % 2 === 1
  if (even === true) {
    listStudents.push("SOLO")
  }
  let decidedPairs = new Set(decidedPairs);
  let choices =new Set(listStudents.filter(cv => !decidedPairs.has(cv)))
  let rtn = [];
  let obj = {};
  for (let i = 0; i < listStudents.length; i++) {
    let student = listStudents[i];
    obj[student] = i;
  }
  for (let i = 0; i < listStudents.length; i++) {
    if (rtn[i] === undefined && decidedPairs[i] === undefined) {
      let student = listStudents[i];
      let setOldPairs = new Set([...listOldPairs[i], ...decidedPairs]);
      newPair = getNewPair(choices, student, setOldPairs);
      rtn[i] = newPair;
      posPair = obj[newPair];
      rtn[posPair] = student;
      choices.delete(student);
      choices.delete(newPair);
    } else {
      rtn[i] = decidedPairs[i];
    }
  }
  if (even === true) {
    rtn.pop()
  }
  return rtn.map(cv => [cv]);
}

/**
 * ToJson
 * @customfunction
 */
function ToJSON(input) {
  return JSON.stringify(input)
}

/**
 * convert
 * FromJSON
 * @customfunction
 */
function FromJSON(input) {
  return JSON.parse(input)
}
