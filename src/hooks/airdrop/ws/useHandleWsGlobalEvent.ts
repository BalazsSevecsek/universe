import { useAirdropStore } from '@app/store/useAirdropStore';
import { WebsocketEventNames, WebsocketGlobalEvent } from '@app/types/ws';

export const useHandleWsGlobalEvent = () => {
    return (event: WebsocketGlobalEvent) => {
        switch (event.name) {
            case WebsocketEventNames.X_SPACE_EVENT:
                useAirdropStore.setState({ latestXSpaceEvent: event.data });
                break;
            default:
                console.warn('Unknown global event', event);
        }
    };
};
