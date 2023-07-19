

export enum TransactionsTypes {
  DESPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}
@Column({
  type: 'enum',
  enum: TransactionsTypes,
})
  type: string;

  so basiccally this is how we make the type the enum for the postgres 


  
  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({
    name: 'client_id',
  })
  client: Client;
}


//*you see tht the only way it'll store the client id when we pas the whole clientobject but the thing is what if we want to pass the id like if we have to pass the object we'd have to create the new one and this is not what we want like we want to pass the id then what can we do we when we passs the client id we first grab it from the databast then assign that object to that client id field


//*so when we save the many side of relations in orm it'll always returns us the corresponding object like the one that belongs to this 

const newtrans = new Transactions();
newtrans.type = data.type;
newtrans.amount = Number(data.amount);
newtrans.client = client;
//   const transaction = transRepo.create({
//     type: data.type,
//     amount: data.amount,
//     client: client,
//   });

//*also they both means the same create just create but not save the data in the database


//?in the one to many side what happen is that when we say there's one column that will map to inverse table column what essentially means that that field when we query will contains the user or inverse here client can have the many transactions os so the one side will not contain the forigh key,but here as you can see that when we do go in many to one side what happen is that'll store the forign key of client but that foriegn will accept the whole object and will autmatiaclly stores the id but to do first we creat the user so bascilly we make the owner of the relation on the many side ,aslso there's some cascade options

//!Even in many to many side i've experiment is that one con have many and one at the same time one can have 0 instance of b like user can have many nick name but at the same time user can have no nickname so and this goes for other side as well like a nick name can have by many user and nickname can have by no u🇷🇸

//!the point i'm trying to potray is that in many to many cases even if we don't provide any association id then stil it's fine and will not throw the error but when we do we've to provide the whole object or n true forms array of the objects so

//*we dont' have to do this
const category1 = new Category()
category1.name = "ORMs"

const category2 = new Category()
category2.name = "Programming"

const question = new Question()
question.title = "How to ask questions?"
question.text = "Where can I ask TypeORM-related questions?"
question.categories = [category1, category2]
await dataSource.manager.save(question)
//*the way we'de do is bovs we'd not making the user in api call we'd provide the id bt ita accepts the whole object what we can we do here is that we can provied the id and then we find from db andnthen assignthose objects as forigen kety //!first find and then assignment them

data.courses.map(async (c) => {
  let course = await this.courseRepository.findOne({
    where: { id: Number(c) },
  });
  return course as CourseEntity;
})
);




//*now just discover the one more thing about tye many to many relationship is that either we on anyside of the relation like the jointbale and then specify, then we can add the in the same on anys side and one more is that we've already discussed is that when we do the create we don't really have to specify that

//?but usually we create where we specify the jointbale column