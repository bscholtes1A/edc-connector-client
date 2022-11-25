import { Action } from "./action";
import { Constraint } from "./constraint";
import { Permission } from "./permission";

export interface Duty {
  assignee?: string;
  assigner?: string;
  consequence?: Duty;
  target?: string;
  uid?: string;
  constraints?: Constraint[];
  parentPermission?: Permission;
  action?: Action;
}
