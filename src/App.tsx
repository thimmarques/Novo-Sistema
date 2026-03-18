/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthProvider } from './contexts/AuthContext';
import Index from './pages/Index';

export default function App() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}
