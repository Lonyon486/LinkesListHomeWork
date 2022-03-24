class Node {
	constructor(data, next){
		this.data = data;
		this.next = next;
	};
};

class LinkedList {
	constructor(){
		this.head = null;
		this.size = 0;

	};

	append(data) {
		const newNode = new Node(data, null);
		if(!this.head){
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			};
			current.next = newNode;
		};
		this.size++;
	};

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        const testNode = new Node(data);

        let current = this.head;
        let previous;

        if (index == 0) {
            newNode.next = current;
            this.head = newNode;

        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next = current;
            previous.newNode = newNode;

        };
        this.size++;
    };

    findNode (value, current = this.head){
        if(this.head === null) {
          return false
        };
      
        if (current !== null) {
          if (current.value === value){
            return true
          } else {
            return this.findNode(value, current.next)
          };
        };
        return false
    };

    peekNode = function (value) {
        if(this.head === null) {
          return false
        };
        return this.head
    };

    print(){
        if (this.size == 0){
            return null;
        }
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data += '\n';
            current = current.next;
        };
        return result;
    };

    remove(data) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data == data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next  = current.next;
                };
                this.else--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
        return null;
    };

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        let current = this.head;
        let previous = null;

        if(index == 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            previous.next = current.next;
        };
        this.size--;
        return current.data;
    };

    isEmpty() {
        if (this.size == 0){
            return true;
        } else {
            return false;
        };
    };

    getSize(){
        return this.size;
    }
};

const linkedList = new LinkedList();
console.log(linkedList); 
linkedList.append('Yefrey Gutierrez');
linkedList.append('Andres Amaya');
linkedList.append('Brayan Steven');
linkedList.append('Cesar Augusto');
linkedList.append('Edwar Malpica');
//linkedList.removeFrom(2);
console.log(linkedList.print());
//console.log(linkedList.isEmpty());
//console.log(linkedList.getSize());
//console.log(linkedList.peekNode());
//console.log(linkedList.findNode);
