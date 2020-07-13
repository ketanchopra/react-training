//jshint esversion:6
const bankState = {};







function calculateUniqueBankList() {
  const fullBankList = ifscData.map(function(item) {
    return item.BANK;
  });
  const bankSet = new Set(fullBankList);
  bankState.uniqueBankList = Array.from(bankSet);
}



document.getElementById('bank').addEventListener('click',function() {
  const bankSelect = document.getElementById('bank');
  calculateUniqueBankList();
  bankState.uniqueBankList.forEach(function(element) {
    const newOption = document.createElement("OPTION");
    newOption.text = element;
    newOption.value = element;
    bankSelect.add(newOption);
  });
},{once: true});


const stateState = {};

function filterListByBank(bank) {
  return ifscData.filter(function(item) {
    return item.BANK === bank;
  });
}

function calculateUniqueStateList() {
  banknew = document.getElementById('bank').value;
  stateData = filterListByBank(banknew);
  const fullStateList = stateData.map(function(item) {
    return item.STATE;
  });
  const StateSet = new Set(fullStateList);
  stateState.uniqueStateList = Array.from(StateSet);
  console.log(stateState.uniqueStateList);
}

document.getElementById('state').addEventListener('click',function() {
  const stateSelect = document.getElementById('state');
  calculateUniqueStateList();
  stateState.uniqueStateList.forEach(function(element) {
    const newOption = document.createElement("OPTION");
    newOption.text = element;
    newOption.value = element;
    stateSelect.add(newOption);
  });
},{once: true});

const districtState = {};

function filterListByBankAndState(bank, state) {
  return ifscData.filter(function(item) {
    return item.BANK === bank && item.STATE === state;
  });
}





function calculateUniqueDistrictList() {
    banknew = document.getElementById('bank').value;
    statenew = document.getElementById('state').value;
    stateData = filterListByBankAndState(banknew, statenew);
    const fullDistrictList = stateData.map(function (item) { return item.DISTRICT; });
    const DistrictSet = new Set(fullDistrictList);
    districtState.uniqueDistrictList = Array.from(DistrictSet);
    console.log(stateState.uniqueStateList);
}

document.getElementById('district').addEventListener('click',function() {
    const districtSelect = document.getElementById('district');
    calculateUniqueDistrictList();
    districtState.uniqueDistrictList.forEach(function (element) {
        const newOption = document.createElement("OPTION");
        newOption.text = element;
        newOption.value = element;
        districtSelect.add(newOption);
    });
},{once: true});

const branchState={};
function filterListByBankAndStateAndDistrict(bank, state,district) {
    return ifscData.filter(function (item) {
        return item.BANK === bank && item.STATE === state && item.DISTRICT === district;
    });
}

function calculateUniqueBranchList() {
    banknew = document.getElementById('bank').value;
    statenew = document.getElementById('state').value;
    districtnew= document.getElementById('district').value;
    stateData = filterListByBankAndState(banknew, statenew,districtnew);
    const fullBranchList = stateData.map(function (item) { return item.BRANCH; });
    const BranchSet = new Set(fullBranchList);
    branchState.uniqueBranchList = Array.from(BranchSet);
    //console.log(stateState.uniqueBranchList);
}

document.getElementById('branch').addEventListener('click',function() {
    const branchSelect = document.getElementById('branch');
    calculateUniqueBranchList();
    branchState.uniqueBranchList.forEach(function (element) {
        const newOption = document.createElement("OPTION");
        newOption.text = element;
        newOption.value = element;
        branchSelect.add(newOption);
    });
},{once:true});

function filterListByBankAndStateAndDistrictAndBranch(bank, state,district,branch) {
    return ifscData.filter(function (item) {
        return item.BANK === bank && item.STATE === state && item.DISTRICT === district && item.BRANCH=== branch;
    });
}
function calculateifsccode() {
    banknew = document.getElementById('bank').value;
    statenew = document.getElementById('state').value;
    districtnew= document.getElementById('district').value;
    branchnew= document.getElementById('branch').value;
    newdata = filterListByBankAndStateAndDistrictAndBranch(banknew, statenew,districtnew,branchnew);
    const IFSCcode = newdata.map(function (item) { return item.IFSC; });
    document.getElementById('ifsc').innerHTML ='<br><label> Your IFSC code  is: </label>'+ IFSCcode;
}
