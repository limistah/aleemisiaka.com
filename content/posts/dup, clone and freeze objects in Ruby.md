---
title: Creating multiple copies of objects in Ruby
date: 2023-09-07
tags: [Ruby, Objects, Duplicate, Software Development]
excerpt: Duplicate an object in Ruby with dup, clone. Grasp the unique scenario that which each of the methods shines.
---

Since everything is an object in Ruby having a functionality that can duplicate objects is not a bad idea.

Ruby ships with two methods for making copies of an object: the `dup` method and the `clone` method.

> The reason why creating multiple copies of an object is because in Ruby, all variables hold a reference to an object. In a case where a section of a code modifies an object that is not meant to be modified, it is ideal to make a copy of that object to be used in that section of the code. 
>
> ```ruby
> # initial value of str
> str = "this is a test string"
> 
> # accepts a string
> def modifyAnyString (strVar) 
> 	# string is replaced with another string changing the value
> 	strVar.replace("this is a modified version of strVar")
> end
> 
> # call the modify string with the str variable
> modifyAnyString(str)
> 
> puts str # outputs: this is a modified version of strVar
> ```
>
> In some languages like C# and Java, this is called passing by value or dereferencing.





### The `dup` method

Take this multiverse object initialized below:

```ruby
multiverse = Object.new
```

We can pass `multiverse` to any method that has a write operation, this would affect the object.

```ruby
def getObjectID (obj)
  obj.object_id # returns the object ID of the passed object
end

puts getObjectID(multiverse) == multiverse.object_id # true
```

To avoid sending in the exact object by reference use the Object.dub method to create a copy of an object.

```ruby
puts getObjectID(multiverse.dup) == multiverse.object_id # false
```

Now it is safer to pass the duplicate variable to the method, this would protect modifying multiverse from the getObjectID method if writing is not desired.

Note: If an object is frozen, the returned object will remain frozen after it has been duplicated

```ruby
dup_multi = multiverse.dup
# freeze the dup_multi
dup_multi.freeze

frz_dup_multi = dup_multi.dup

# false original multiverse has not been frozen
puts multiverse.frozen? 

# true The dup_multi was frozen before duplication
puts frz_dup_multi.frozen? 
```



### The `copy` method

Copying an object is the same as duplicating an object, the only difference is that, when copying, if the object is frozen, the copied object remains unfrozen.

This can be useful to create a copy that is not restricted either by the function caller or by developers that want to ensure that a method always work with unfrozen objects all the time.

```ruby
copy_multi = multiverse.dup
# freeze the dup_multi
copy_multi.freeze

frz_copy_multi = copy_multi.dup

# false original multiverse has not been frozen
puts multiverse.frozen?

# false The copy_multi was frozen before duplication
puts frz_copy_multi.frozen? 
```



Shalom 🙇 



