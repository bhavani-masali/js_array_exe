const data = require("./sample_student_data.js.json");

const logItems = (dataArray) => {
  //console.log(dataArray);
};

const filteredNeighb = (dataItms) => {
  console.log(
    dataItms.filter((dataItem) => dataItem.Neighborhood === "Asylum Hill")
  );
};

// const getDominated_byData = (dataArr) => {
//   let baseGenderArr = [];
//   dataArr.map((dataItm) => {
//     baseGenderArr.push(dataItm);

//     if (dataItm.Gender_Male > dataItm.Gender_Female) {
//       dataItm.dominated_by = "Male";
//     } else if (dataItm.Gender_Male < dataItm.Gender_Female) {
//       dataItm.dominated_by = "Female";
//     } else {
//       dataItm.dominated_by = "NONE";
//     }
//   });
//   console.log(baseGenderArr);
//   return baseGenderArr;
// };

const getDominated_byData = (dataArr) => {
  const newDataArr = dataArr.map((dataItem) => {
    let clonedDataItem = { ...dataItem };
    let dominatedBy;
    if (dataItem.Gender_Male > dataItem.Gender_Female) {
      dominatedBy = "Male";
    } else if (dataItem.Gender_Male < dataItem.Gender_Female) {
      dominatedBy = "Female";
    } else {
      dominatedBy = "NONE";
    }

    clonedDataItem.dominatedBy = dominatedBy;

    return clonedDataItem;
  });
  console.log(newDataArr);
};

const getNeighbourhoodCount = (dataItms) => {
  let neighbourCount = {};

  dataItms.forEach((dataItm) => {
    const currentNeighbourHood = dataItm.Neighborhood;

    if (neighbourCount.hasOwnProperty(currentNeighbourHood)) {
      neighbourCount[currentNeighbourHood]++;
    } else {
      neighbourCount[currentNeighbourHood] = 1;
    }
  });
  // console.log(neighbourCount);
  Object.keys(neighbourCount).forEach((key) => {
    console.log(`${key} neighborhood has ${neighbourCount[key]} items`);
  });
};

const checkHasAmericanIndian = (dataitms) => {
  const sumOfRace_American_Indiand = dataitms.some(
    (dataItem) => dataItem["Race_American Indian"] === 0
  );

  console.log(
    ` items in data has "Race_American Indian" as count ${sumOfRace_American_Indiand}`
  );
};

const checkHasRaceAsian = (dataItems) => {
  dataItems.every((dataItem, index) => {
    if (dataItem.Race_Asian === 0) {
      console.log(`found Race_Asian to be zero at ${index} `);
      return false;
    } else return true;
  });
};

const taskZero = () => {
  console.log("Task zero starts");
  logItems(data);
  console.log("Task zero ends");
};
const taskOne = () => {
  console.log("Task One starts");
  filteredNeighb(data);
  console.log("Task One ends");
};
const taskTwo = () => {
  console.log("Task Two starts");
  checkHasAmericanIndian(data);
  console.log("Task Two ends");
};
const taskThree = () => {
  console.log("Task Three starts");
  getDominated_byData(data);
  console.log("Task Three ends");
};
const taskFour = () => {
  console.log("Task Four starts");
  getNeighbourhoodCount(data);
  console.log("Task Four ends");
};
const taskFive = () => {
  console.log("Task Five starts");
  checkHasRaceAsian(data);
  console.log("Task Five ends");
};

const main = () => {
  //[X] 0. Task zer0: log all the item in data
  // taskZero();
  //[] 1. Task one : log only the items where "Neighborhood" is  "Asylum Hill"
  // HINT: use the filter method
  // taskOne();
  //[] 2. Task two : check at least one item in data has "Race_American Indian" as 0
  // HINT: use the some method
  //   taskTwo();
  /*[] 3. Task three : create new data array with extra attribute "dominated_by", the value of the attribute is determined by comparing
    no. of "Gender_Male"(M) and "Gender_Female"(F). If the "F==M" then the value should be "NONE", "F>M" then the value should be "FEMALE"
     and "F<M" then the value should be "MALE". Print the newly derived data.*/
  // HINT: use the map method
  // taskThree();
  /*[] 4. Iterate through each Item in the array and print the "Neighborhood" and their count in the data set
    example:
    "Asylum Hill" neighborhood has 3 items
    "Brickell" neighborhood has 2 items
    */
  // HINT: use the forEach method
  // taskFour();
  /*[] 5.  Iterate through each Item untill you find "Race_Asian" as 0, print "found Race_Asian to be zero at <index no.>".
   */
  // HINT: use the every method
  taskFive();
};

// ==== do not remove ===
main();
// ====
