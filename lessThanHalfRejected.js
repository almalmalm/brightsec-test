/*
Create a lessThanHalfRejected(promiseCollection: Promise[]) method which returns a promise that:
- resolves if amount of rejected promises from promiseCollection is less than half of promiseCollection length
- rejects otherwise
*/
async function lessThanHalfRejected(promiseCollection) {
  const rejectedPromises = [];

  for (let i = 0; i < promiseCollection.length; i++) {
    await promiseCollection[i].catch((error) => {
      rejectedPromises.push(error);
    });
  }
  if (rejectedPromises.length < promiseCollection.length / 2) {
    return Promise.resolve('Resolved more than half of promises');
  } else {
    return Promise.reject('Rejected more than half of promises');
  }
}

export { lessThanHalfRejected };
