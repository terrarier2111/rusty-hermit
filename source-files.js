var N = null;var sourcesIndex = {};
sourcesIndex["ansi_term"] = {"name":"","files":["ansi.rs","debug.rs","difference.rs","display.rs","lib.rs","style.rs","windows.rs","write.rs"]};
sourcesIndex["ascii"] = {"name":"","files":["ascii_char.rs","ascii_str.rs","ascii_string.rs","free_functions.rs","lib.rs"]};
sourcesIndex["async_task"] = {"name":"","files":["header.rs","lib.rs","raw.rs","runnable.rs","state.rs","task.rs","utils.rs"]};
sourcesIndex["atty"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bit_field"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bytes"] = {"name":"","dirs":[{"name":"buf","files":["buf_impl.rs","buf_mut.rs","chain.rs","iter.rs","limit.rs","mod.rs","reader.rs","take.rs","uninit_slice.rs","vec_deque.rs","writer.rs"]},{"name":"fmt","files":["debug.rs","hex.rs","mod.rs"]}],"files":["bytes.rs","bytes_mut.rs","lib.rs","loom.rs"]};
sourcesIndex["cache_padded"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["chrono"] = {"name":"","dirs":[{"name":"format","files":["mod.rs","parse.rs","parsed.rs","scan.rs","strftime.rs"]},{"name":"naive","files":["date.rs","datetime.rs","internals.rs","isoweek.rs","time.rs"]},{"name":"offset","files":["fixed.rs","mod.rs","utc.rs"]}],"files":["date.rs","datetime.rs","div.rs","lib.rs","oldtime.rs","round.rs"]};
sourcesIndex["chunked_transfer"] = {"name":"","files":["decoder.rs","encoder.rs","lib.rs"]};
sourcesIndex["clap"] = {"name":"","dirs":[{"name":"app","files":["help.rs","meta.rs","mod.rs","parser.rs","settings.rs","usage.rs","validator.rs"]},{"name":"args","dirs":[{"name":"arg_builder","files":["base.rs","flag.rs","mod.rs","option.rs","positional.rs","switched.rs","valued.rs"]}],"files":["any_arg.rs","arg.rs","arg_matcher.rs","arg_matches.rs","group.rs","macros.rs","matched_arg.rs","mod.rs","settings.rs","subcommand.rs"]},{"name":"completions","files":["bash.rs","elvish.rs","fish.rs","macros.rs","mod.rs","powershell.rs","shell.rs","zsh.rs"]}],"files":["errors.rs","fmt.rs","lib.rs","macros.rs","map.rs","osstringext.rs","strext.rs","suggestions.rs","usage_parser.rs"]};
sourcesIndex["client_bw"] = {"name":"","files":["client.rs"]};
sourcesIndex["client_latency"] = {"name":"","files":["client.rs"]};
sourcesIndex["concurrent_queue"] = {"name":"","files":["bounded.rs","lib.rs","single.rs","unbounded.rs"]};
sourcesIndex["core_affinity"] = {"name":"","files":["lib.rs"]};
sourcesIndex["crossbeam_channel"] = {"name":"","dirs":[{"name":"flavors","files":["array.rs","at.rs","list.rs","mod.rs","never.rs","tick.rs","zero.rs"]}],"files":["channel.rs","context.rs","counter.rs","err.rs","lib.rs","select.rs","select_macro.rs","utils.rs","waker.rs"]};
sourcesIndex["crossbeam_deque"] = {"name":"","files":["deque.rs","lib.rs"]};
sourcesIndex["crossbeam_epoch"] = {"name":"","dirs":[{"name":"sync","files":["list.rs","mod.rs","queue.rs"]}],"files":["atomic.rs","collector.rs","default.rs","deferred.rs","epoch.rs","guard.rs","internal.rs","lib.rs"]};
sourcesIndex["crossbeam_utils"] = {"name":"","dirs":[{"name":"atomic","files":["atomic_cell.rs","consume.rs","mod.rs","seq_lock.rs"]},{"name":"sync","files":["mod.rs","parker.rs","sharded_lock.rs","wait_group.rs"]}],"files":["backoff.rs","cache_padded.rs","lib.rs","thread.rs"]};
sourcesIndex["either"] = {"name":"","files":["lib.rs"]};
sourcesIndex["fastrand"] = {"name":"","files":["lib.rs"]};
sourcesIndex["form_urlencoded"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_core"] = {"name":"","dirs":[{"name":"task","dirs":[{"name":"__internal","files":["atomic_waker.rs","mod.rs"]}],"files":["mod.rs","poll.rs"]}],"files":["future.rs","lib.rs","stream.rs"]};
sourcesIndex["futures_io"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_lite"] = {"name":"","files":["future.rs","io.rs","lib.rs","prelude.rs","stream.rs"]};
sourcesIndex["hdrhist"] = {"name":"","files":["lib.rs"]};
sourcesIndex["hello_world"] = {"name":"","files":["main.rs"]};
sourcesIndex["hermit_abi"] = {"name":"","files":["lib.rs","tcplistener.rs","tcpstream.rs"]};
sourcesIndex["hermit_sys"] = {"name":"","dirs":[{"name":"net","files":["device.rs","executor.rs","mod.rs","waker.rs"]}],"files":["cmath.rs","lib.rs"]};
sourcesIndex["httpd"] = {"name":"","files":["main.rs"]};
sourcesIndex["idna"] = {"name":"","files":["lib.rs","punycode.rs","uts46.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"hermit","files":["mod.rs","x86_64.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["libm"] = {"name":"","dirs":[{"name":"math","files":["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]}],"files":["lib.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["managed"] = {"name":"","files":["lib.rs","map.rs","object.rs","slice.rs"]};
sourcesIndex["matches"] = {"name":"","files":["lib.rs"]};
sourcesIndex["matrix_multiplcation"] = {"name":"","dirs":[{"name":"tests","files":["laplace.rs","matmul.rs","mod.rs"]}],"files":["matrix_multiplication.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"memchr","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","mod.rs","naive.rs"]},{"name":"memmem","dirs":[{"name":"prefilter","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["fallback.rs","genericsimd.rs","mod.rs"]},{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]}],"files":["cow.rs","lib.rs"]};
sourcesIndex["memoffset"] = {"name":"","files":["lib.rs","offset_of.rs","raw_field.rs","span_of.rs"]};
sourcesIndex["micro_benchmarks"] = {"name":"","dirs":[{"name":"benches","files":["mod.rs"]}],"files":["main.rs"]};
sourcesIndex["num_cpus"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_integer"] = {"name":"","files":["average.rs","lib.rs","roots.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]};
sourcesIndex["parking"] = {"name":"","files":["lib.rs"]};
sourcesIndex["percent_encoding"] = {"name":"","files":["lib.rs"]};
sourcesIndex["pi_sequential"] = {"name":"","dirs":[{"name":"tests","files":["laplace.rs","matmul.rs","mod.rs"]}],"files":["pi_sequential.rs"]};
sourcesIndex["pin_project_lite"] = {"name":"","files":["lib.rs"]};
sourcesIndex["raw_cpuid"] = {"name":"","files":["extended.rs","lib.rs"]};
sourcesIndex["rayon"] = {"name":"","dirs":[{"name":"collections","files":["binary_heap.rs","btree_map.rs","btree_set.rs","hash_map.rs","hash_set.rs","linked_list.rs","mod.rs","vec_deque.rs"]},{"name":"compile_fail","files":["cannot_collect_filtermap_data.rs","cannot_zip_filtered_data.rs","cell_par_iter.rs","mod.rs","must_use.rs","no_send_par_iter.rs","rc_par_iter.rs"]},{"name":"iter","dirs":[{"name":"collect","files":["consumer.rs","mod.rs"]},{"name":"find_first_last","files":["mod.rs"]},{"name":"plumbing","files":["mod.rs"]}],"files":["chain.rs","chunks.rs","cloned.rs","copied.rs","empty.rs","enumerate.rs","extend.rs","filter.rs","filter_map.rs","find.rs","flat_map.rs","flat_map_iter.rs","flatten.rs","flatten_iter.rs","fold.rs","for_each.rs","from_par_iter.rs","inspect.rs","interleave.rs","interleave_shortest.rs","intersperse.rs","len.rs","map.rs","map_with.rs","mod.rs","multizip.rs","noop.rs","once.rs","panic_fuse.rs","par_bridge.rs","positions.rs","product.rs","reduce.rs","repeat.rs","rev.rs","skip.rs","splitter.rs","sum.rs","take.rs","try_fold.rs","try_reduce.rs","try_reduce_with.rs","unzip.rs","update.rs","while_some.rs","zip.rs","zip_eq.rs"]},{"name":"slice","files":["mergesort.rs","mod.rs","quicksort.rs"]}],"files":["delegate.rs","lib.rs","math.rs","option.rs","par_either.rs","prelude.rs","private.rs","range.rs","range_inclusive.rs","result.rs","split_producer.rs","str.rs","string.rs","vec.rs"]};
sourcesIndex["rayon_core"] = {"name":"","dirs":[{"name":"compile_fail","files":["mod.rs","quicksort_race1.rs","quicksort_race2.rs","quicksort_race3.rs","rc_return.rs","rc_upvar.rs","scope_join_bad.rs"]},{"name":"join","files":["mod.rs"]},{"name":"scope","files":["mod.rs"]},{"name":"sleep","files":["counters.rs","mod.rs"]},{"name":"spawn","files":["mod.rs"]},{"name":"thread_pool","files":["mod.rs"]}],"files":["job.rs","latch.rs","lib.rs","log.rs","private.rs","registry.rs","unwind.rs"]};
sourcesIndex["rust_tcp_io_perf"] = {"name":"","files":["config.rs","connection.rs","lib.rs","print_utils.rs","threading.rs"]};
sourcesIndex["rusty_demo"] = {"name":"","dirs":[{"name":"tests","files":["laplace.rs","matmul.rs","mod.rs"]}],"files":["main.rs"]};
sourcesIndex["scopeguard"] = {"name":"","files":["lib.rs"]};
sourcesIndex["server_bw"] = {"name":"","files":["server.rs"]};
sourcesIndex["server_latency"] = {"name":"","files":["server.rs"]};
sourcesIndex["smoltcp"] = {"name":"","dirs":[{"name":"iface","files":["ethernet.rs","mod.rs","neighbor.rs","route.rs"]},{"name":"phy","files":["fault_injector.rs","fuzz_injector.rs","loopback.rs","mod.rs","pcap_writer.rs","tracer.rs"]},{"name":"socket","files":["meta.rs","mod.rs","ref_.rs","set.rs","tcp.rs","udp.rs","waker.rs"]},{"name":"storage","files":["assembler.rs","mod.rs","packet_buffer.rs","ring_buffer.rs"]},{"name":"wire","files":["arp.rs","ethernet.rs","icmp.rs","icmpv4.rs","icmpv6.rs","ip.rs","ipv4.rs","ipv6.rs","ipv6fragment.rs","ipv6hopbyhop.rs","ipv6option.rs","ipv6routing.rs","mld.rs","mod.rs","ndisc.rs","ndiscoption.rs","pretty_print.rs","tcp.rs","udp.rs"]}],"files":["lib.rs","macros.rs","parsers.rs","time.rs"]};
sourcesIndex["strsim"] = {"name":"","files":["lib.rs"]};
sourcesIndex["textwrap"] = {"name":"","files":["indentation.rs","lib.rs","splitting.rs"]};
sourcesIndex["tiny_http"] = {"name":"","dirs":[{"name":"util","files":["custom_stream.rs","equal_reader.rs","messages_queue.rs","mod.rs","refined_tcp_stream.rs","sequential.rs","task_pool.rs"]}],"files":["client.rs","common.rs","lib.rs","request.rs","response.rs"]};
sourcesIndex["tinyvec"] = {"name":"","dirs":[{"name":"array","files":["generated_impl.rs"]}],"files":["array.rs","arrayvec.rs","arrayvec_drain.rs","lib.rs","slicevec.rs","tinyvec.rs"]};
sourcesIndex["tinyvec_macros"] = {"name":"","files":["lib.rs"]};
sourcesIndex["unicode_bidi"] = {"name":"","dirs":[{"name":"char_data","files":["mod.rs","tables.rs"]}],"files":["deprecated.rs","explicit.rs","format_chars.rs","implicit.rs","level.rs","lib.rs","prepare.rs"]};
sourcesIndex["unicode_normalization"] = {"name":"","files":["__test_api.rs","decompose.rs","lib.rs","lookups.rs","no_std_prelude.rs","normalize.rs","perfect_hash.rs","quick_check.rs","recompose.rs","replace.rs","stream_safe.rs","tables.rs"]};
sourcesIndex["unicode_width"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["url"] = {"name":"","files":["host.rs","lib.rs","origin.rs","parser.rs","path_segments.rs","quirks.rs","slicing.rs"]};
sourcesIndex["vec_map"] = {"name":"","files":["lib.rs"]};
sourcesIndex["waker_fn"] = {"name":"","files":["lib.rs"]};
sourcesIndex["x86"] = {"name":"","dirs":[{"name":"apic","files":["ioapic.rs","mod.rs","x2apic.rs","xapic.rs"]},{"name":"bits16","files":["mod.rs","segmentation.rs"]},{"name":"bits32","files":["eflags.rs","mod.rs","paging.rs","segmentation.rs","task.rs"]},{"name":"bits64","files":["mod.rs","paging.rs","registers.rs","rflags.rs","segmentation.rs","sgx.rs","syscall.rs","task.rs","vmx.rs"]},{"name":"vmx","files":["mod.rs","vmcs.rs"]}],"files":["controlregs.rs","dtables.rs","fence.rs","io.rs","irq.rs","lib.rs","msr.rs","random.rs","segmentation.rs","task.rs","time.rs","tlb.rs"]};
createSourceSidebar();
