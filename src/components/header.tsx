import Link from 'next/link';
import HeaderAuth from './header-auth';
import SearchInput from './search-input';
import { Suspense } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";

export default async function Header() {
    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand>
                <Link href="/" className='font-bold'>Dev Topics</Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Suspense>
                        <SearchInput />
                    </Suspense>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    )
}


