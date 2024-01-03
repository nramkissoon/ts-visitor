import { externalLogger } from "./external-logger";
import { jsonLogger } from "./json-logger";
import { validator } from "./validator";
import { createCustomer } from "./objects";

const customer1 = createCustomer({
  id: "1",
  name: "John Doe",
});

customer1.accept(jsonLogger);

jsonLogger.log(customer1);

const printExternalLog = async () =>
  console.log(await externalLogger.log(customer1));

printExternalLog();

const customer2 = createCustomer({
  id: "2",
  name: "",
});

validator.validate(customer1);

try {
  validator.validate(customer1);
  console.log("Customer 1 is valid");
  validator.validate(customer2);
} catch (e) {
  console.error(e);
}
