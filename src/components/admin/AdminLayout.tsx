import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FiHome, FiUsers, FiCalendar, FiMessageSquare, FiSettings } from 'react-icons/fi';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter();

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: FiHome
    },
    {
      name: 'Usuários',
      href: '/admin/users',
      icon: FiUsers
    },
    {
      name: 'Consultas',
      href: '/admin/appointments',
      icon: FiCalendar
    },
    {
      name: 'Mensagens',
      href: '/admin/messages',
      icon: FiMessageSquare
    },
    {
      name: 'Configurações',
      href: '/admin/settings',
      icon: FiSettings
    }
  ];

  const isActive = (path: string) => {
    if (path === '/admin') {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-20 px-4 bg-white border-b">
            <Link href="/admin" className="relative w-48 h-16">
              <Image
                src="/images/logo.png"
                alt="Nandana"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Admin</p>
                <p className="text-xs text-gray-500">admin@nandana.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 