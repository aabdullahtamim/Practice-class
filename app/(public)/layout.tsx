import Footer from '@/components/section/Footer'
import Header from '@/components/section/Header'
import { ReactNode } from 'react';

const PublicLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default PublicLayout;