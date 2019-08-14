
pragma solidity ^0.5.0;

contract Certificate {
    
    // Issuing institution 
    address Cert_Authority;
    
    struct Cert_Data {
        // Owner's address.
        address owner;
        
        // Name of the owner
        string name;
        
        // Major (University) of the reciepient.
        string   major;

        // date when the certificate was issued (unix).
        uint256 issue_date;
    }
    
    // An array of certitifcates issued to the corresponding recipients.
    Cert_Data[] public Certificates;

    /**
    * @dev Issuing the certificate to a valid the designated recipient.
    */
    function certify(uint256 index, address _owner, string memory _name, 
    string memory _major, uint256 _issue_date) public {
        Cert_Authority = msg.sender;
        
        Certificates[index].owner = _owner;
        Certificates[index].name = _name;
        Certificates[index].major = _major;
        Certificates[index].issue_date = _issue_date;
    }

    /**
    * @dev returns certificate metadata in one function call, rather than separate .call()s
    */
    function getCertificateDetails(uint index, address _owner) public returns (
        string memory, string memory, uint256) {
        require(_owner == Certificates[index].owner);
        
            return (Certificates[index].name, 
            Certificates[index].major, 
            Certificates[index].issue_date);
    }
}