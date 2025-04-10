import React from 'react';
import { FiWifiOff } from 'react-icons/fi';
import Head from 'next/head';

/**
 * Página exibida quando o usuário está offline
 * @component
 */
const OfflinePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Offline | Nandana Terapias</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <FiWifiOff className="mx-auto text-gray-400 w-16 h-16 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Você está offline
          </h1>
          <p className="text-gray-600 mb-4">
            Verifique sua conexão com a internet e tente novamente
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </>
  );
};

export default OfflinePage; 