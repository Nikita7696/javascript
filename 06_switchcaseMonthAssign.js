function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`This Month is ${month}==> January`);
      break;

    case 2:
      console.log(`This Month is ${month}==> February`);
      break;
    case 3:
      console.log(`This Month is ${month}==> March`);
      break;
    case 4:
      console.log(`This Month is ${month}==> April`);
      break;
    case 5:
      console.log(`This Month is ${month}==> May`);
      break;
    case 6:
      console.log(`This Month is ${month}==> June`);
      break;
    case 7:
      console.log(`This Month is ${month}==> July`);
    case 8:
      console.log(`This Month is ${month}==> August`);
      break;
    case 9:
      console.log(`This Month is ${month}==> September`);
      break;
    case 10:
      console.log(`This Month is ${month}==> october`);
      break;
    case 11:
      console.log(`This Month is ${month}==> November`);
      break;
    case 12:
      console.log(`This Month is ${month}==> December`);
      break;
    default:
      console.log(` Invalid Input --> Day Number ${month}`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
