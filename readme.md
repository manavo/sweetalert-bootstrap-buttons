# SweetAlert Bootstrap Buttons

This is a bridge library for SweetAlert, to allow using Bootstrap buttons.

## Usage

Include the library (make sure it is included **after** the SweetAlert library itself):

```
<script src="js/sweetalert.min.js"></script>
<script src="js/bswal.js"></script>
```

Replace the `sweetalert.css` file (or compare the two and see what needs to be commented out, it is just some button styles).

This overrides the `window.swal` function, so no code changes needed.

## Caveats

`logStr` calls are broken, so you won't get useful debug messages if you call SweetAlert incorrectly.
