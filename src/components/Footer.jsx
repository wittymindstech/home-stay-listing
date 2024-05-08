import React from 'react';

const Footer = () => {
    return (
        <div class="flex flex-col max-h-screen">
        <footer class="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left mt-auto">
            <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
                © 2023 Copyright:
                <a href="https://tw-elements.com/">TW Elements</a>
            </div>
        </footer>
        </div>
    );
};

export default Footer;