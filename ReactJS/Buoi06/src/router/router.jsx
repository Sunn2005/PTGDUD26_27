<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<Product />} />
    <Route path='*' element={<NotFound />} />
</Routes>