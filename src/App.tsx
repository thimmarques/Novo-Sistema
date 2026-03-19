/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/ToastContainer';
import Index from './pages/Index';

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Index />
        <ToastContainer />
      </ToastProvider>
    </AuthProvider>
  );
}
