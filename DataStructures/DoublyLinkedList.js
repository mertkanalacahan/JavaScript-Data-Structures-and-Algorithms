class Node
{
  constructor(val)
  {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList
{
  constructor()
  {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val)
  {
    var newNode = new Node(val);

    if(!this.head)
    {
      this.head = newNode;
      this.tail = this.head;
    }

    else
    {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop()
  {
    if(!this.tail) return undefined;

    var poppedNode = this.tail;

    if(this.length == 1)
    {
      this.head = null;
      this.tail = null;
    }

    else
    {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  removeFromBeginning()
  {
    if(!this.head) return undefined;

    var oldHead = this.head;

    if(this.length == 1)
    {
      this.head = null;
      this.tail = null;
    }

    else
    {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  pushToBeginning(val)
  {
    var newNode = new Node(val);

    if(!this.head)
    {
      this.head = newNode;
      this.tail = this.head;
    }

    else
    {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index)
  {
    if(index < 0 || index >= this.length) return null;

    var i = 0;
    var current = this.head;

    if(index <= (this.length / 2))
    {
      while(i != index)
      {
        current = current.next;
        i++;
      }
    }

    else
    {
      current = this.tail;
      i = this.length - 1;

      while(i != index)
      {
        current = current.prev;
        i--;
      }
    }

    return current;
  }

  set(index, val)
  {
    var node = this.get(index);

    if(node)
    {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(index, val)
  {
    if(index < 0 || index > this.length) return false;
    if(index == 0) return !!this.pushToBeginning(val);
    if(index == this.length) return !!this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next.prev = newNode;
    
    this.length++;
    return true;
  }

  remove(index, val)
  {
    if(index < 0 || index >= this.length) return undefined;
    if(index == 0) return this.removeFromBeginning();
    if(index == this.length - 1) return this.pop();

    var removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--; 
    return removedNode;
  }
  
  reverse()
  {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next = null;
    var prev = null;

    for(var i = 0; i < this.length; i++)
    {
      next = node.next;
      node.prev = next;
      node.next = prev;

      prev = node;
      node = next;
    }

    return this;
  }
  
  print()
  {
    var arr = [];
    var current = this.head;
    
    while(current)
    {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}