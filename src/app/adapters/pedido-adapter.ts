import {Pedido} from '@app/models';

export const PedidoAdapter ( pedido: Pedido []){
  return pedido.map((p)({...p, id: p.id.topUpperCase() }))
}

