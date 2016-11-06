import { Intent } from './intent.model';
import { Entity } from './entity.model';
import { Input } from './input.model';
import { Output } from './output.model';
import { Context } from './context.model';

export class Mensagem {
    intents: Array<Intent> = new Array<Intent>();
    entities: Array<Entity> = new Array<Entity>();
    input: Input;
    output: Output;
    context: Context;
}