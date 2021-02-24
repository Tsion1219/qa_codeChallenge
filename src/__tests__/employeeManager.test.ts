import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand poobab",
    });

  });
  
    it("can edit an existing employee Teresa", async () => {
      await em.selectEmployeeByName("Teresa Osborne");
      await em.editEmployee({ title: "Manager" });
      await em.saveChanges();
      await em.selectEmployeeByName("Phillip Weaver");
      await em.selectEmployeeByName("Teresa Osborne");
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: -1,
        name: "Teresa Osborne",
        phone: "4824931093",
        title: "Manager",
        
    });
    expect(employee.title).toEqual("Manager");
    expect(employee.name).toEqual("Teresa osbonrne");
    expect(employee.phone).toEqual("4824931093");
  });
  it("can add a new employee Neba", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "Neba",
      phone: "1234567891",
      title: "Developer",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Neba");
    let employee = await em.getEmployeeInfo();
    //expect(employee).toEqual({
      expect(employee.name).toEqual("Neba");
      expect(employee.phone).toEqual("1234567891");
      expect(employee.title).toEqual("Developer");
  });

  //it("", () => {









  });

  
