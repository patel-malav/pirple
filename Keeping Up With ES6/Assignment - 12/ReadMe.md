# What is Object Oriented Programming ?

Ans -> Object Oriented Programming introduces Concept of Classes, Interfaces
Abstraction, Reusability, Polymorphism, Inheritance, Aggregation, etc..

What I mean is that we have a task to make a Application for an Car Sales
Store the Store has a set of dealers and distributors from which he or she i.e.
Manager of store gets the car to sell & the store has customers.

so we can store the information of the users and dealers in form of a common class
called **Person**, so a **Person** is common class from which we can derive a
class **Dealer** and **Customer** both of which are humans and have different
methods associated with them but some common properties like **name**, **number**,
**email**, further the **Dealer** can have **Company**, **Buy** method, **Payment**,
etc.

The Main Purpose of OOP is to think our variables and functions in terms of Classes
and Objects i.e. a **Car** is class **Ferrari** is car which is Object of Class Car
so we can have reusable Classes, we can hide information not needed by other Classes
by concept of Abstraction, Polymorphism to change the type's of objects from one to
other if needed.

Inheritance is explained by the Example of Person above.

## An Ideal Application that would benefit from the OOP will be a **Games**

Lets say a Game for a platformer like Mario, or Angry Bird.
Angry Bird Game is made of very small repetitive components

### Bird
### Blocks
### World

**-----------------------------------------------------------------------------**

The Angry Bird Game is made up World where we are given a Wooden Post and a queue
of birds waiting in line to get shoot the world has methods to physics used and
other stuff.

A **Bird Class** can be use to derive different types of birds with different type of
Appearance and different type of effects but all of them are birds.

A **Blocks Class** has different Orientation and Size, Width & Type i.e. Metal, Wood,
Concrete, etc. but all of them are block and have different position's

But Making the Same Game using Functional Way would land us making the same Objects
or properties many types.

Here, We can derive that **Yellow Bird** extends **Bird** and change its behavior.

**-----------------------------------------------------------------------------**

class World {
    int gravity;
    Entities[] elements;
    ...

    ...
        physics and display methods
    ...
}

abstract class Entities {
    int width, height, posX, posY, weight;
    String basicShape;

    ...
    Entities Methods for World and display
    ...
}

class Bird extends Entities {
    int color;
    int image;
    int cost;
    ...

    abstract void power() {}
    abstract void animation() {}
    ...
}

class Block extends Entities {
    String type;
    World belongsTo;

    abstract void behavior() {}
    abstract void animation() {}
    ...
}

class BlueBird extends Bird {
    int color = "Blue";
    int image = "(url)";

    @Override
    void behavior() {
        ...
    }
    @Override
    void animation() {
        ...
    }
}

class SteelBlock extends Block {
    String type = "steel";

    @Override
    void behavior() {
        ...
    }
    @Override
    void animation() {
        ...
    }
}
