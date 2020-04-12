// pragma solidity >=0.4.21 <0.7.0;
pragma solidity >=0.4.21 <0.5.0;

contract SimpleStorage {
  uint myVariable;

  function set(uint x) public {
    myVariable = x;
  }

  function get() public returns (uint) {
    return myVariable;
  }
}
