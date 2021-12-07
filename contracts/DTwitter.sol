pragma solidity ^0.4.23;


contract Dtwitter {

  // The structure of the message.
    struct Message {
        address sender; // sender
        string text; // Message body
        uint created_at; //Mining time
    }

  // This event fires when sending a message.
  // By specifying indexed, you can filter from Javascript side.
    event MessageSent ( uint indexed id, address indexed sender, string text, uint created_at);

  // It is all messages. The index on the array becomes ID.
    Message[] public messages;

  // SolidityThe new constructor notation.
  constructor() public
  {
      // A dummy message for making Id = 0 missing number
      messages.push(Message(0, "", now));
  }

  // Get message data from message ID. Since we can not return the structure, we are returning multiple values.
  function getMessage(uint id) external view returns(uint, address, string, uint)
  {
    // ID If it is invalid processing stops here
    require(id < messages.length);

    //Note: Structures and arrays in the function are written to the block chain by default (there is a fee for each execution).
    // It can be avoided by specifying memory.
    Message memory message = messages[id];
    return (id, message.sender, message.text, message.created_at);
  }

  // We will get the latest 20 messages.
  //By specifying view, writing to the block chain is impossible and the commission is gone.

  function getMessages() external view returns (uint[20])
  {
    uint[20] memory results;
    
    // If all messages are less than 20, loop stop there
    uint max = messages.length > 20 ? 20 : messages.length - 1;

    for (uint i=0; i < max; i++)
    {
      uint msgId = messages.length - 1 - i;
      results[i] = msgId;
    }

    return results;
  }

  // I send a text message to recipient.
  function sendMessage(string text) external returns(uint)
  {
    // Trying to send an empty message stops processing
    require(bytes(text).length > 0);
    uint timestamp = now;

    // push Returns the length of the array, -1 will be the last index.
    uint id = messages.push(Message(msg.sender, text, timestamp)) - 1;

    // Fire the event that the message was sent.
    emit MessageSent(id, msg.sender, text, timestamp);
    return id;
  }
}
