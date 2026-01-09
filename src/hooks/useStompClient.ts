import { useEffect, useState, useRef, useCallback } from 'react';
import { Client, IMessage, StompSubscription, IFrame } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

interface StompClientOptions {
  url: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: IFrame) => void;
}

export function useStompClient({ url, onConnect, onDisconnect, onError }: StompClientOptions) {
  const [isConnected, setIsConnected] = useState(false);
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    // STOMP 클라이언트 생성
    const client = new Client({
      webSocketFactory: () => new SockJS(url),
      connectHeaders: {
        // 필요한 헤더 추가 (예: 인증)
      },
      debug: (str) => {
        console.log('STOMP: ' + str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      console.log('STOMP 연결됨');
      setIsConnected(true);
      onConnect?.();
    };

    client.onDisconnect = () => {
      console.log('STOMP 연결 해제됨');
      setIsConnected(false);
      onDisconnect?.();
    };

    client.onStompError = (frame) => {
      console.error('STOMP 에러:', frame.headers['message']);
      onError?.(frame);
    };

    clientRef.current = client;
    client.activate();

    return () => {
      if (client.active) {
        client.deactivate();
      }
    };
  }, [url, onConnect, onDisconnect, onError]);

  const subscribe = useCallback((destination: string, callback: (message: IMessage) => void) => {
    if (!clientRef.current || !isConnected) return null;
    
    return clientRef.current.subscribe(destination, callback);
  }, [isConnected]);

  const publish = useCallback((destination: string, body: unknown, headers?: Record<string, string>) => {
    if (!clientRef.current || !isConnected) return;
    
    clientRef.current.publish({
      destination,
      body: JSON.stringify(body),
      headers: headers || {}
    });
  }, [isConnected]);

  const unsubscribe = useCallback((subscription: StompSubscription) => {
    if (subscription) {
      subscription.unsubscribe();
    }
  }, []);

  return {
    isConnected,
    subscribe,
    publish,
    unsubscribe,
    client: clientRef.current
  };
}