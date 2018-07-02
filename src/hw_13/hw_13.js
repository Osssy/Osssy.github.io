import './hw_13.scss';
import { Lamp } from './components/select/lamp';
import { LampsManager } from "./components/lamps-manager/lamps-manager";

const manager = new LampsManager(document.querySelector('.lamps-wrapper'));