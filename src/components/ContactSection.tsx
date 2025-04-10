import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset 
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      // Simulação de envio de dados - em um projeto real, enviaria para o backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Dados do formulário:', data);
      reset();
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <section id="contato" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a otimizar sua prática clínica com nossa plataforma.
            Entre em contato para saber mais sobre nossos planos ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <div className="mb-10 bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 bg-green-100 rounded-full p-3 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Endereço</p>
                    <p className="text-gray-600">Rua das Flores, 123 - Jardins</p>
                    <p className="text-gray-600">São Paulo - SP, 01234-567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 bg-green-100 rounded-full p-3 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Telefone</p>
                    <p className="text-gray-600">(11) 9 8765-4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 bg-green-100 rounded-full p-3 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">E-mail</p>
                    <p className="text-gray-600">contato@nandana.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
                Horário de Atendimento
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Segunda a Sexta</span>
                  <span className="font-medium text-green-600">9:00 - 19:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Sábado</span>
                  <span className="font-medium text-green-600">9:00 - 16:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Domingo</span>
                  <span className="font-medium text-red-500">Fechado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulário de contato */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {isSubmitSuccessful ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Mensagem Enviada!</h3>
                  <p className="text-gray-600 mb-6">Agradecemos pelo seu contato. Nossa equipe retornará em breve.</p>
                  <button 
                    onClick={() => reset()}
                    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome Completo*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? 'border-red-500 bg-red-50' : 'border border-gray-300'}`}
                      placeholder="Seu nome completo"
                      {...register('name', { required: 'Nome é obrigatório' })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E-mail*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500 bg-red-50' : 'border border-gray-300'}`}
                        placeholder="seu@email.com"
                        {...register('email', { 
                          required: 'E-mail é obrigatório',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Telefone*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.phone ? 'border-red-500 bg-red-50' : 'border border-gray-300'}`}
                        placeholder="(00) 00000-0000"
                        {...register('phone', { required: 'Telefone é obrigatório' })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Serviço de Interesse*
                    </label>
                    <select
                      id="service"
                      className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.service ? 'border-red-500 bg-red-50' : 'border border-gray-300'}`}
                      {...register('service', { required: 'Selecione um serviço' })}
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="agenda">Agenda Online</option>
                      <option value="prontuario">Prontuário Eletrônico</option>
                      <option value="financeiro">Financeiro</option>
                      <option value="consultorio">Consultório Virtual</option>
                      <option value="outros">Outros</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Como podemos ajudar você?"
                      {...register('message')}
                    ></textarea>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Enviar mensagem
                          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 