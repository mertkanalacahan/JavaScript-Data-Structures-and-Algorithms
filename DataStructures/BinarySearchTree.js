class Node
{
  constructor(val)
  {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree
{
  constructor()
  {
    this.root = null;
  }

  insert(val)
  {
    var newNode = new Node(val);

    if(!this.root)
    {
      this.root = newNode;  
      return this;
    }

    var current = this.root;

    while(true)
    {
      if(value === current.value) return undefined;

      if(value < current.value)
      {
        if(current.left === null)
        {
          current.left = newNode;
          return this;
        }

        current = current.left;
      }

      else if (value > current.value)
      {
        if(current.right === null)
        {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(value)
  {
    if (!this.root) return null;

    let current = this.root;

    while(current)
    {
      if (current.value === value)
      {
        return current;
      }

      if (value < current.value)
      {
        current = current.left;
      }

      else 
      {
        current = current.right;
      }
    }
    
    return null;
  }
}